import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 text-black ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 text-black">
          <PostCard />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative gap-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
