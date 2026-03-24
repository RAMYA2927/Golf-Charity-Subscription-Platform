import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Mock users for development (remove when database is set up)
    const mockUsers = [
      {
        id: '1',
        email: 'admin@charity.com',
        password: 'admin123',
        name: 'Admin User',
        role: 'admin',
        subscription_status: 'active',
        charity_percentage: 50,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: '2',
        email: 'user@charity.com',
        password: 'user123',
        name: 'Test User',
        role: 'user',
        subscription_status: 'active',
        charity_percentage: 50,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    ];

    // Find user by email
    const user = mockUsers.find(u => u.email === email);

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Return user data (without password)
    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      subscription_status: user.subscription_status,
      charity_percentage: user.charity_percentage,
      created_at: user.created_at,
      updated_at: user.updated_at,
    });
  } catch (error) {
    console.error('Sign in error:', error);
    return NextResponse.json(
      { error: 'Sign in failed: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
