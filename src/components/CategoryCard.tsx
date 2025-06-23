import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  icon: string; // expects a relative path like "/icons/dj.png"
}

export default function CategoryCard({ title, icon }: CategoryCardProps) {
  return (
    <div className="border dark:border-zinc-700 rounded-xl shadow-md p-6 flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors">
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
  );
}
