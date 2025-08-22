import dbConnect from "@/lib/dbConnect";

// GET all products
export async function GET() {
  try {
    const data = await dbConnect("products").find({}).toArray();
    return Response.json({ data });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch products", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// POST new product
export async function POST(req) {
  try {
    const data = await req.json();
    const insertedData = await dbConnect("products").insertOne(data);

    return new Response(
      JSON.stringify({
        message: "Product added successfully",
        insertedId: insertedData.insertedId,
        acknowledged: insertedData.acknowledged,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to add product(s)", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
