'use client';

import { motion } from 'framer-motion';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

// ✅ Define Form Type
type FormData = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
};

// ✅ Yup Schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().of(yup.string().required()).min(1, 'Select at least one category').required('Select at least one category'),
  languages: yup.array().of(yup.string().required()).min(1, 'Select at least one language').required('Select at least one language'),
  fee: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required')
});

export default function OnboardingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: []
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted Data:', data);
  };

  const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
  const languages = ['Hindi', 'English', 'Punjabi', 'Bengali'];

  return (
    <div className="dark:bg-zinc-950 min-h-screen transition-colors">
      <Navbar />
      <main className="px-6 py-12 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
        >
          Artist Onboarding
        </motion.h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            {...register('name')}
            placeholder="Artist Name"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <textarea
            {...register('bio')}
            placeholder="Short Bio"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
          />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}

          <label className="block text-sm font-medium text-gray-700 dark:text-white">Select Categories</label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex gap-2 items-center text-gray-700 dark:text-white">
                <input type="checkbox" value={cat} {...register('category')} /> {cat}
              </label>
            ))}
          </div>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

          <label className="block text-sm font-medium text-gray-700 dark:text-white">Languages Spoken</label>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <label key={lang} className="flex gap-2 items-center text-gray-700 dark:text-white">
                <input type="checkbox" value={lang} {...register('languages')} /> {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}

          <select
            {...register('fee')}
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
          >
            <option value="">Select Fee Range</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000 - ₹25,000</option>
            <option>₹25,000 - ₹50,000</option>
          </select>
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}

          <input
            {...register('location')}
            placeholder="Location"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

          <input
            type="file"
            className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
          />

          <button type="submit" className="w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
