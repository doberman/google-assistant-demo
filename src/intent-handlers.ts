import { SimpleResponse, BasicCard, Button } from 'actions-on-google';

export const defaultWelcome = conv => {
  console.log('handling default welcome intent');

  conv.ask(
    new SimpleResponse({
      speech:
        '<speak>' +
        'Hello there!' +
        '<break time="1000ms"/>' +
        'How are you today?' +
        '</speak>',
      text: 'Hello there! How are you today?',
    })
  );

  const date = new Date();
  conv.ask(
    new SimpleResponse({
      speech:
        '<speak>' +
        'The time is ' +
        `<say-as interpret-as="time">${date.toISOString()}</say-as>. ` +
        'What can I help you with?' +
        '</speak>',
      text: `The time is ${date.toLocaleTimeString()}. What can I help you with?`,
    })
  );

  if (conv.screen) {
    // user is using a screen based device
    // - add a second response
    conv.ask(
      new BasicCard({
        text: '**Some bolded text**\n\nHere’s some more text.',
        buttons: [
          new Button({ title: 'Button Label', url: 'https://example.com' }),
        ],
      })
    );
  }
};

export const defaultFallback = conv => {
  console.log('handling default fallback intent');
  conv.ask('Sorry, I don’t understand. Can you be more precise?');
};
