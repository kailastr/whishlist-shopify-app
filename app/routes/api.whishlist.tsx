import { json } from "@remix-run/node";

export async function loader() {
    return json({
        "message": "Hello from the API!",
    });
}

export async function action({ request }: any) {
    const method = request.method;
    switch (method) {
        case "POST": {
            return json({
                "message": "Success",
                "method": "POST"
            });
        }
        case "DELETE": {
            return json({
                "message": "Success",
                "method": "DELETE"
            });
        }
        case "PUT": {
            return json({
                "message": "Success",
                "method": "PUT"
            });
        }
        default: {
            return json({
                "message": "Hello from the API!",
            });
        }
    }
}