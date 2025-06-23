interface ArtistProps {
  name: string;
  category: string;
  price: string;
  location: string;
}

export default function ArtistCard({ name, category, price, location }: ArtistProps) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white dark:bg-zinc-900 dark:border-zinc-700 transition-colors hover:scale-105 hover:shadow-lg duration-300">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
      <p className="text-sm text-gray-800 dark:text-gray-300">💰 {price}</p>
      <p className="text-sm text-gray-800 dark:text-gray-300">📍 {location}</p>
      <button className="mt-4 w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition">Ask for Quote</button>
    </div>
  );
}
