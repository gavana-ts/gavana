export class Model {
    public id?: number;
    public createdAt?: Date;
    public updatedAt?: Date;

    protected attributes: { [key: string]: any } = {};

    constructor(attributes?: any) {
        if (attributes) {

        }
    }

    protected setAttributes(attributes?: any) {

    }

    protected static getTableName(): string {
        return this.name.toLowerCase();
    }

    async save(): Promise<this> {
        const db = getDb();

    }

}