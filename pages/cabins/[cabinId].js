import CabinView from "@/components/CabinView";
import { getCabin, getCabins } from "@/lib/data-service";
import Head from "next/head";

// Dynamically generated - SSR
// export async function getServerSideProps({ params }) {
//   const cabin = await getCabin(params.cabinId);
//   return { props: { cabin } };
// }

// This is how we could do SSG:
// getStaticPaths + getStaticProps
export async function getStaticPaths() {
  const cabins = await getCabins();
  const paths = cabins.map((cabin) => {
    return {
      params: { cabinId: cabin.id.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

export default function Cabin({ cabin }) {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Cabin {cabin.name} &mdash; The Wild Oasis</title>
      </Head>

      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}
