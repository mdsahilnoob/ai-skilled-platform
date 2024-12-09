import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function FollowingPointerDemo() {
  return (
    <div className="min-h-screen mt-10 w-80 mx-auto">
        <h2 className='flex flex-cols display-flex flex-center justify-center font-extrabold'>Courses</h2>

      <FollowerPointerCard
        title={
          <TitleComponent
            title='Student'
            avatar='https://images.unsplash.com/photo-1647527936203-78851d0706ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        }
      >
        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              fill
              style={{objectFit:"cover"}}
              className='group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 '
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Patient-Centered Communication
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Master the art of empathetic and effective communication with patients and their families.
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              fill
              style={{objectFit:"cover"}}
              className='group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 '
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Emergency Medicine Basics
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Gain essential skills to handle medical emergencies confidently and effectively
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

      </FollowerPointerCard>

      <FollowerPointerCard
        title={
          <TitleComponent
            title='Student'
            avatar='https://images.unsplash.com/photo-1647527936203-78851d0706ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        }
      >
        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Telemedicine Mastery
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Learn the ins and outs of virtual patient care and remote consultations
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              fill
              style={{objectFit:"cover"}}
              className='group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200'
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Pandemic Preparedness and Response
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Equip yourself with the knowledge to manage public health crises effectively
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

      </FollowerPointerCard>

      <FollowerPointerCard
        title={
          <TitleComponent
            title='Student'
            avatar='https://images.unsplash.com/photo-1647527936203-78851d0706ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        }
      >
        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Electronic Health Records EHR Proficiency
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Learn to navigate and optimize EHR systems for efficient patient care.
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src='https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="thumbnail"
              fill
              style={{objectFit: "cover"}}
              className='group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200'
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
                Pharmacology Simplified
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
                Strengthen your understanding of drug interactions, dosages, and patient safety.
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">5 Dec 2024</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Learn More
              </div>
            </div>
          </div>
        </div>

      </FollowerPointerCard>

      

    </div>
  );
}

// const blogContent = {
//   slug: "amazing-tailwindcss-grid-layouts",
// //   author: "Student",
// //   date: "28th March, 2023",
//   title: "Amazing Tailwindcss Grid Layout Examples",
//   description:
//     "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//   image: "https://images.unsplash.com/photo-1593086586351-1673fca190cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   authorAvatar: "https://images.unsplash.com/photo-1647527936203-78851d0706ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
