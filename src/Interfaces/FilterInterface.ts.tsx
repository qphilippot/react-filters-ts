export interface FilterInterface {
    isSatisfiedBy(item: any): boolean;
    getId(): string;
    isEnabled(): boolean;
    getName(): string;
}
