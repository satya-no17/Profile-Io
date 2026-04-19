import { getProfileData } from "@/actions/getData";
import EditForm from "@/components/EditForm";


export default async function Page() {
  const data = await getProfileData();

  return <EditForm data ={data} />;
}