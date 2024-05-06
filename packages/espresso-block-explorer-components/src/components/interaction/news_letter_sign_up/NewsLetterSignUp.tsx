import ArrowRight from '@/visual/icons/ArrowRight';
import React, { useState } from 'react';
import { IconButton } from '../../hid/buttons';
import './news_letter_sign_up.css';

/**
 * NewsLetterSignUp component is a component that is meant to wrap the
 * necessary pieces of signing up for the Espresso System News Letter. It is
 * meant to be a copied implementation of the Newsletter sign up form that is
 * available on https://espressosys.com/ as of the time of writing this
 * component.  2024-01-18
 */
const NewsLetterSignUp: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <form
      className="form--newsletter"
      name="email-form"
      action="https://espressosys.us5.list-manage.com/subscribe/post?u=d4f2bb0a71ee7b25637616b41&amp;id=25ceb4d043&amp;f_id=002d9ee6f0"
      method="post"
    >
      <input
        type="email"
        autoComplete="email"
        placeholder="Subscribe to our newsletter"
        value={emailAddress}
        onChange={(event) => setEmailAddress(event.target.value)}
      />
      <IconButton
        className="submit"
        disabled={!emailAddress.trim()}
        title="Sign-up for Newsletter"
      >
        <ArrowRight />
      </IconButton>
    </form>
  );
};

export default NewsLetterSignUp;
