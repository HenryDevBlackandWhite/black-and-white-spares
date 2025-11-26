import parts from "../../../data/parts.json";

export function GET() {
  return Response.json(parts);
}