import { useState, useEffect } from 'react';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

// Hook personalizado para cargar datos
const useData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // A esto:
      fetch('./data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

const convertNumberTo = (number) => {
  if (number >= 10000) {
    return `${(number / 1000).toFixed(1).replace('.0', '')}k`;
  }
  return number;
};

export const OverviewContainer = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <section className="maz-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto">
        <div className="text-center text-dark-grayish-blue">Cargando...</div>
      </section>
    );
  }

  if (error || !data || !data.overView) {
    return (
      <section className="maz-w-[1440px] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto">
        <div className="text-center text-bright-red">Error al cargar los datos</div>
      </section>
    );
  }

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
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-8">
          Overview Today
        </h2>
        <div className="flex flex-wrap">
          <div className="text-center text-dark-grayish-blue w-full">Cargando...</div>
        </div>
      </section>
    );
  }

  if (error || !data || !data['overview-today']) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-8">
          Overview Today
        </h2>
        <div className="flex flex-wrap">
          <div className="text-center text-bright-red w-full">Error al cargar los datos</div>
        </div>
      </section>
    );
  }

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