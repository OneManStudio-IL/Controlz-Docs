import React, { useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import { useLocation, useHistory } from '@docusaurus/router';

let bTriggered = false;
const defaultLocale = 'en';

function NotFound() {
  const location = useLocation()
  const history = useHistory()

  console.log("location:", location)

  useEffect(() => {
    // Define the list of supported locales (for example)
    const supportedLocales = ['ru'];

    // Get the current locale from the URL (assuming the format is /:locale/some-path)
    const pathParts = location.pathname.split('/')
    console.log("pathname:", location.pathname)
    console.log("pathParts:", pathParts)
    const locale = pathParts[2]
    console.log("locale:", locale)

    // If the locale is not supported, redirect to the default locale
    if (!bTriggered 
      && 
      locale 
      && 
      !supportedLocales.includes(locale)) 
    {
      const newPath = location.pathname.replace(locale + "/", "")
      console.log("newPath:", newPath)
      history.replace(newPath)
      bTriggered = true
    }
  }, [location, history]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>
        <Translate
          id="notfound.title"
          description="Title of the 404 page"
        >
          Oops! Page not found.
        </Translate>
      </h1>
      <p>
        <Translate
          id="notfound.message1"
          description="Message when the page is not found"
        >
          The page you are looking for doesn't exist.
        </Translate>
        <Translate
          id="notfound.message2"
          description="Message that informs the user of the attempted access"
        >
          You tried to access
        </Translate>{' '}
        <code>{location.pathname}</code>.
      </p>
      <p>
        <Translate
          id="notfound.goBack"
          description="Text prompting the user to go back to homepage"
        >
          Go back to
        </Translate>{' '}
        <a href="/Controlz-Doc/">
          <Translate
            id="notfound.homepageLink"
            description="Link text for the homepage"
          >
            the homepage
          </Translate>
        </a>.
      </p>
    </div>
  );
}

export default NotFound;