import { client } from "@/lib/sanity/lib/client";

export async function getUserByEmail(email: string) {
  const query = `*[_type == "user" && email == $email][0]`;
  return await client.fetch(query, { email });
}

// Helper function to create a new user
export async function createUser(userData: {
  email: string;
  name: string;
  passwordHash: string;
}) {
  return await client.create({
    _type: "user",
    ...userData,
  });
}
