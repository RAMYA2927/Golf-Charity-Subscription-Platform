import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock charities data for development/deployment
    const mockCharities = [
      {
        id: '1',
        name: 'Save the Children',
        description: 'Helping children worldwide get access to education, healthcare, and protection.',
        logo_url: '/api/placeholder/200/200',
        website: 'https://www.savethechildren.org',
        total_raised: 150000,
        featured: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Red Cross',
        description: 'Providing emergency assistance, disaster relief, and education worldwide.',
        logo_url: '/api/placeholder/200/200',
        website: 'https://www.redcross.org',
        total_raised: 250000,
        featured: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'World Wildlife Fund',
        description: 'Conserving nature and reducing the most pressing threats to the diversity of life on Earth.',
        logo_url: '/api/placeholder/200/200',
        website: 'https://www.worldwildlife.org',
        total_raised: 85000,
        featured: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: '4',
        name: 'UNICEF',
        description: 'Working in over 190 countries and territories to save children\'s lives.',
        logo_url: '/api/placeholder/200/200',
        website: 'https://www.unicef.org',
        total_raised: 320000,
        featured: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: '5',
        name: 'Habitat for Humanity',
        description: 'Helping families build and improve places to call home.',
        logo_url: '/api/placeholder/200/200',
        website: 'https://www.habitat.org',
        total_raised: 125000,
        featured: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ];
    
    return NextResponse.json(mockCharities);
  } catch (error) {
    console.error('Error fetching charities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch charities' },
      { status: 500 }
    );
  }
}
