import GrinningPizza from '../../assets/grinning_pizzaX256.png';

import GoBackButton from '../Generic/GoBackButton';

const NotFoundPage = () => {
  return (
    <main className="grid gap-8">
      <div className="relative">
        <p className="absolute text-[15rem] sm:text-[25rem] top-2/4 left-2/4 -translate-x-2/4  -translate-y-2/4 text-orange -z-10 opacity-60">
          404
        </p>

        <img src={GrinningPizza} alt="Grinning Pizza" />

        <div className="absolute flex flex-col  w-full h-full bottom-[50%] left-[50%] bg-surface clip-message p-2 pb-10 rounded">
          <p className="sm:text-2xl text-center">
            You pick the wrong page!
          </p>

          <p className="sm:text-2xl mt-2 text-center">
            Better for you to go back.
          </p>
        </div>
      </div>
      <GoBackButton />
    </main>
  );
};

export default NotFoundPage;
