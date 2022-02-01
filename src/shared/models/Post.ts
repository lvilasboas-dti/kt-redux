export class Post {
    id: number;
    userId: number;
    title: string;
    text: string;

    constructor(init?: Partial<Post>) {
        Object.assign(this, init);
    }

    public static MakePost(obj: any): Post {
        return new Post({
            id: obj.id,
            userId: obj.userId,
            title: obj.title,
            text: obj.body,
        });
    }
}
