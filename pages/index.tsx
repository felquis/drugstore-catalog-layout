import type { NextPage } from 'next'
import Head from 'next/head'
import MedicinePrice from "../components/MedicinePrice";

const meds = Array.from({ length: 9 * 2 }).fill({});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nihil esse amet molestiae</title>
        <meta
          name="description"
          content="Rerum vero dolor pariatur dolorem eius maxime. Odio aut dolores et quas maxime reprehenderit ea architecto. Nihil esse amet molestiae sit voluptatibus cum autem et. Est in atque eligendi id dolores ratione facilis quaerat. Ab saepe nihil et. Animi architecto consequatur voluptatibus"
        />
      </Head>

      <main className="text-green-700 pb-4 bg-green-400">
        <header className="bg-green-50 px-2 sm:px-6 pt-6 pb-3">
          <p>www.example.com</p>

          <h1 className="text-3xl font-bold mt-8 text-green-500">
            Nihil esse amet <span className="text-green-700">molestiae</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2 px-2 sm:px-6">
          {meds.map((a, i) => (
            <MedicinePrice
              special={i === 0 || i === 1}
              currentPrice={2990}
              originalPrice={3590}
              loyaltyPrice={2490}
              description="Rerum vero dolor pariatur dolorem eius maxime. Odio aut dolores et quas maxime reprehenderit ea architecto. Nihil esse amet molestiae sit voluptatibus cum autem et. Est in atque eligendi id dolores ratione facilis quaerat. Ab saepe nihil et. Animi architecto consequatur voluptatibus"
              subTitle="Nihil esse amet molestiae sit voluptatibus cum autem et."
              title="Nihil esse amet molestiae"
              key={i}
            />
          ))}
        </div>

        <footer className="bg-green-900 px-2 sm:px-6 py-2">
          <p className="text-sm text-white">Drugstore</p>
        </footer>
      </main>
    </>
  );
};

export default Home
