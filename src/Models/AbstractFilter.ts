import {FilterInterface} from "../Interfaces/FilterInterface.ts";

export abstract class AbstractFilter implements FilterInterface {
    private readonly isActive: boolean;
    private readonly id: string;
    private readonly name: string;

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    protected constructor(id: string, name: string, isActive: boolean) {
        this.isActive = isActive;
        this.name = name;
        this.id = id;
    }

    public isSatisfiedBy(item: any): boolean {
        return this.isActive
    }

    public isEnabled(): boolean {
        return this.isActive;
    }
}
