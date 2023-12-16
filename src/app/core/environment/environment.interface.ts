export interface EnvironmentInitInterface {
    production: boolean;
    urlFetch: string;
}

export interface EnvironmentInterface extends EnvironmentInitInterface {
    whatsappShare: string;
    emailContact: string;
    whatsappMessage: string;
}