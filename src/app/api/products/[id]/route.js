import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb"; 

export async function GET(req, { params }) {
  try {
    // Extract the ID from the URL parameters
    const { id } =await params;

    // Validate the ID format
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }


    // Query for the specific document by _id
    const data = await dbConnect("products").findOne({ _id: new ObjectId(id) });

    // Check if data was found
    if (!data) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the found document
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}