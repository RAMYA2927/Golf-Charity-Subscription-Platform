import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();

    if (action === 'generate') {
      return await generateDraw();
    } else if (action === 'publish') {
      return await publishDraw();
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

async function generateDraw() {
  try {
    // Mock draw generation for development
    const mockDraw = {
      id: '1',
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      status: 'simulated',
      draw_type: 'algorithmic',
      drawn_numbers: [12, 23, 34, 45, 56],
      created_at: new Date().toISOString(),
    };

    return NextResponse.json({
      draw: mockDraw,
      userCount: 150,
      drawnNumbers: mockDraw.drawn_numbers,
    });
  } catch (error) {
    throw error;
  }
}

async function publishDraw() {
  try {
    // Mock publish draw for development
    const mockDraw = {
      id: '1',
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      status: 'published',
      draw_type: 'algorithmic',
      drawn_numbers: [12, 23, 34, 45, 56],
      published_at: new Date().toISOString(),
    };

    const mockWinners = [
      {
        draw_id: '1',
        user_id: '1',
        match_type: '3-match',
        prize_amount: 150.00,
      },
      {
        draw_id: '1',
        user_id: '2',
        match_type: '4-match',
        prize_amount: 300.00,
      },
    ];

    return NextResponse.json({
      draw: mockDraw,
      winnersCount: mockWinners.length,
      winners: mockWinners,
    });
  } catch (error) {
    throw error;
  }
}
