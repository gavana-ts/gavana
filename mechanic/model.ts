export class Model {
    public id?: number;
    public createdAt?: Date;
    public updatedAt?: Date;

    protected attributes: { [key: string]: any } = {};
    protected fillable: string[] = [];
    protected casts: {};
    protected table?: string;

    constructor(attributes?: any) {
        if (attributes) {

        }
    }

    protected setAttributes(attributes?: any) {

    }

    protected static getTableName(): string {
        return this.name.toLowerCase();
    }

    async save() {
        const db = getDb();

    }

    

}