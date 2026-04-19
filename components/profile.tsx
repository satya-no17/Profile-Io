
import { createClient } from '../lib/supabase/server';
import ProfileCard from './ProfileCard';

export default async function Profile({ params }: { params: Promise<{ username: string }> }) {
const{ username} = await params

  const supabase = await createClient()


  const { data } = await supabase
    .from('profile')
    .select(`
    id,
    username,
    fullname,
    bio,
    avatar,
    description,
    links(*)`)
    .eq('username', username)
    .single()

if (!data) {
  return <div className="text-white">User not found</div>;
}

  return (
   
        <ProfileCard data={data} />

  )
}

