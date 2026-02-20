// before the update this was called middleware.ts
// acts like a middleware. functions that run before the request is processed by the route handler.(security checkpoint - traffic controller)

import { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {}
