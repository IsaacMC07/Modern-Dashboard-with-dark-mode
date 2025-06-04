import data from '/src/data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

const convertNumberTo = (number) => {
  if (number >= 10000) {
    return `${(number / 1000).toFixed(1).replace('.0', '')}k`;
  }
  return number;
};

export const OverviewContainer = () => {
  return (
    <section className="maz-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto">
      {data.overView.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audienceType={object.audienceType}
          audience={convertNumberTo(object.audience)}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
        />
      ))}
    </section>
  );
};

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-8">
        Overview Today
      </h2>
      <div className="flex flex-wrap">
        {data['overview-today'].map((object) => (
          <OverviewTodayCard
            key={object.id}
            network={object.network}
            statusType={object.statusType}
            stats={convertNumberTo(object.stats)}
            porcentage={object.porcentage}
            isUp={object.isUp}
          />
        ))}
      </div>
    </section>
  );
};
