import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getProjectById } from '../../../lib/projects-db';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Await the params because Next.js passes them as a Promise
  const { id } = await context.params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const project = getProjectById(projectId);

  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
