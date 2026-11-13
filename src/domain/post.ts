export interface Post{
    id: number;
    title: string;
    content: string;
    category: {
            id: number
            name: string
            description: string | null
        } | null
    author: string;
}