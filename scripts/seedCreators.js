import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';

function loadEnv(filePath) {
  const data = readFileSync(filePath, { encoding: 'utf8' });
  return data.split(/\n/).reduce((env, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return env;
    const [key, ...rest] = trimmed.split('=');
    env[key] = rest.join('=').trim();
    return env;
  }, {});
}

const env = loadEnv(new URL('../.env.local', import.meta.url));
const URL = env.VITE_SUPABASE_URL;
const API_KEY = env.VITE_SUPABASE_ANON_KEY;

if (!URL || !API_KEY) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(URL, API_KEY);

const creators = [
  {
    name: 'Marques Brownlee (MKBHD)',
    url: 'https://www.youtube.com/@MKBHD',
    description: 'In-depth tech reviews and consumer electronics analysis with high production value.',
    imageURL: 'https://yt3.ggpht.com/ytc/AKedOLQKyGMPp_JYoDM8jzV8DeKmMbg_U0aYfVj7NQ=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Valkyrae',
    url: 'https://www.twitch.tv/Valkyrae',
    description: 'Popular Twitch streamer known for gaming, creative streams, and strong community energy.',
    imageURL: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3ce28d23-327c-41f8-a58e-bc4b0bbb54ecf-profile_image-70x70.png',
  },
  {
    name: 'Crash Course',
    url: 'https://www.youtube.com/@crashcourse',
    description: 'Educational videos on history, science, and more, made engaging for learners of all ages.',
    imageURL: 'https://yt3.ggpht.com/ytc/AKedOLSSLtWdXqWNXx5Rb3Tj1BM0C8aKOmLpJfPTBQ=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'Internet Money',
    url: 'https://www.youtube.com/@MakeMusicGreatAgain',
    description: 'Music production tutorials, beat-making tips, and behind-the-scenes content for aspiring producers.',
    imageURL: 'https://yt3.ggpht.com/ytc/AKedOLTCPuMHuVXZn0cWCKMVPUAg5CHsoaVfNvHXBg=s88-c-c0x00ffffff-no-rj',
  },
  {
    name: 'Jeff Nippard',
    url: 'https://www.youtube.com/@jeffnippard',
    description: 'Science-based fitness content with workout plans, nutrition advice, and evidence-backed training tips.',
    imageURL: 'https://yt3.ggpht.com/ytc/AKedOLQu9jV2N5XDfXv5z0h8Xpds-aMZ-gP__pDc=s88-c-k-c0x00ffffff-no-rj',
  },
];

async function seed() {
  try {
    const { data, error } = await supabase.from('creators').insert(creators);
    if (error) throw error;
    console.log('Seed complete. Inserted creators:');
    console.table(data.map(({ id, name, url }) => ({ id, name, url })));
  } catch (error) {
    console.error('Seed failed:', error.message || error);
    process.exit(1);
  }
}

seed();
