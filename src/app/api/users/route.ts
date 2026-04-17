const users = [
	{ id: 1, name: "田中太郎", age: 25 },
	{ id: 2, name: "佐藤花子", age: 30 },
	{ id: 3, name: "鈴木次郎", age: 28 },
];

export async function GET() {
	return Response.json(users);
}