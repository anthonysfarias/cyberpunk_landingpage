import { IContactForm } from '@/types';

// SRP: Responsabilidade única - apenas validação
// OCP: Aberto para extensão com novas regras de validação
export interface IValidationRule<T> {
  validate(value: T): boolean;
  errorMessage: string;
}

export interface IValidationResult {
  isValid: boolean;
  errors: string[];
}

// Implementações concretas de regras de validação
export class RequiredRule implements IValidationRule<string> {
  errorMessage = 'Este campo é obrigatório';

  validate(value: string): boolean {
    return value.trim().length > 0;
  }
}

export class EmailRule implements IValidationRule<string> {
  errorMessage = 'Email inválido';

  validate(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
}

export class MinLengthRule implements IValidationRule<string> {
  constructor(private minLength: number) {}

  get errorMessage(): string {
    return `Deve ter pelo menos ${this.minLength} caracteres`;
  }

  validate(value: string): boolean {
    return value.trim().length >= this.minLength;
  }
}

export class MaxLengthRule implements IValidationRule<string> {
  constructor(private maxLength: number) {}

  get errorMessage(): string {
    return `Deve ter no máximo ${this.maxLength} caracteres`;
  }

  validate(value: string): boolean {
    return value.trim().length <= this.maxLength;
  }
}

// Validator genérico que aplica múltiplas regras
export class FieldValidator {
  private rules: IValidationRule<string>[] = [];

  addRule(rule: IValidationRule<string>): FieldValidator {
    this.rules.push(rule);
    return this;
  }

  validate(value: string): IValidationResult {
    const errors: string[] = [];

    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        errors.push(rule.errorMessage);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Serviço específico para validação de formulário de contato
export class ContactFormValidationService {
  private static nameValidator = new FieldValidator()
    .addRule(new RequiredRule())
    .addRule(new MinLengthRule(2))
    .addRule(new MaxLengthRule(50));

  private static emailValidator = new FieldValidator()
    .addRule(new RequiredRule())
    .addRule(new EmailRule());

  private static messageValidator = new FieldValidator()
    .addRule(new RequiredRule())
    .addRule(new MinLengthRule(10))
    .addRule(new MaxLengthRule(500));

  static validateForm(form: IContactForm): { [K in keyof IContactForm]: IValidationResult } {
    return {
      name: this.nameValidator.validate(form.name),
      email: this.emailValidator.validate(form.email),
      message: this.messageValidator.validate(form.message)
    };
  }

  static isFormValid(form: IContactForm): boolean {
    const validation = this.validateForm(form);
    return Object.values(validation).every(result => result.isValid);
  }

  static getFormErrors(form: IContactForm): string[] {
    const validation = this.validateForm(form);
    return Object.values(validation)
      .flatMap(result => result.errors);
  }
}
