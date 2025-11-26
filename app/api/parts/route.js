import parts from "../../../data/search-index.json";

export function GET() {
  return Response.json(parts);
}