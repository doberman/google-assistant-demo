import {
  SimpleResponse,
  BasicCard,
  Button,
  Suggestions,
} from 'actions-on-google';

function formatMonths(months: string[]): string {
  if (months.length <= 1) {
    return months.join('');
  }

  return `${months.slice(0, -1).join(', ')} and ${months.slice(-1)}`;
}

export const defaultWelcome = conv => {
  console.log('handling default welcome intent');

  const response = 'I can help you find a sunny location for your vacation. Lets get started! Which month suits you?';

  conv.ask(
    new SimpleResponse({
      speech: `<speak>${response}</speak>`,
      text: response,
    })
  );

  conv.ask(new Suggestions('august', 'september', 'october'));
};

export const defaultFallback = conv => {
  console.log('handling default fallback intent');

  conv.ask('Sorry, I don’t understand. What month do you want to travel?');
};

export const vacationGuide = (conv, params) => {
  console.log('handling heat guide intent');

  console.log(' - datePeriod:', params.datePeriod);

  const month = new Date(params.datePeriod.startDate).toLocaleString('en-us', {
    month: 'long',
  });

  console.log(' - month:', month);

  const destinationsForMonth = formatMonths(destinations[month]);

  const response = `Nice, in ${month} I can recommend you to go to ${destinationsForMonth}.`

  conv.close(
    new SimpleResponse({
      speech: `<speak>${response}</speak>`,
      text: response,
    })
  );
};

const destinations = {
  January: ['Egypt', 'Dubai', 'Greece'],
  February: ['Spain', 'Portugal', 'Germany'],
  March: ['Iceland', 'Croatia', 'Morocco'],
  April: ['France', 'Turkey', 'Mexico'],
  May: ['Cap Verde', 'Sicily', 'Ibiza'],
  June: ['Spain', 'France', 'Thailand'],
  July: ['Corsica', 'Bali'],
  August: ['Canary Islands', 'Sicily', 'Ibiza'],
  September: ['Cap Verde', 'Sicily', 'Ibiza'],
  October: ['Malta', 'Denmark', 'Albania'],
  November: ['Cyprus', 'Greece', 'Turkey'],
  December: ['Tunis', 'Spain', 'Bali'],
};
