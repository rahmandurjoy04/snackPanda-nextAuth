import dbConnect from "@/lib/dbConnect"

export async function GET() {

  // Getting Mongodb All Data
  const data = await dbConnect('products').find({}).toArray()

  return Response.json({ data })
}


// Posting Data
export async function POST(req) {
  // getting the posted Data
  try {
    const data = await req.json();
    const insertedData = await dbConnect("products").insertOne(data);
    return new Response(
      JSON.stringify({
        message: "Product added successfully",
        insertedId: insertedData.insertedId,
        acknowledged: insertedData.acknowledged,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    // Handle errors
    return new Response(
      JSON.stringify({ error: "Failed to add product(s)", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return Response.json({ postData })
}