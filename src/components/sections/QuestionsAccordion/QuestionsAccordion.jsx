import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

const QuestionsAccordion = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section className="accordion py-5">
        <div className="container flex flex-col justify-between w-3/5 m-auto">
          <h1 className="text-center pb-5 pt-10 text-4xl max-w-md m-auto font-bold">
            Frequently Asked Questions
          </h1>
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is Verbyo?{' '}
            </AccordionHeader>
            <AccordionBody>
              Verbyo might be the only app in the world that rewards
              you every time you create content on your social media
              account. It&apos;s designed specifically for regular
              people who want to monetize their online time. But
              Verbyo goes beyond that—it&apos;s a community of
              individuals committed to driving positive change in
              their communities and the world. By amplifying the
              social causes that matter to us and helping foundations
              raise awareness for their missions, you make a
              difference. And yes, every time you create content,
              you&apos;re instantly rewarded.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              How and when do I get paid?
            </AccordionHeader>
            <AccordionBody>
              Based on your country of residence, Verbyo offers
              several payout methods, including money transfer
              services, wire transfers, and ACH. To receive your
              payout, simply fill in your payout information in your
              Verbyo app account. Once you reach the minimum payout
              amount, you can request your payout. Depending on your
              chosen method, it may take between 1 to 3 days for the
              funds to arrive in your account.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(3)}>
              What income can I earn with Verbyo?
            </AccordionHeader>
            <AccordionBody>
              First and foremost, Verbyo is not a quick way to make
              money, and you should not rely on it as a primary source
              of income. Your earnings will depend on the number of
              offers you receive from advertisers each month. However,
              Verbyo is an excellent platform to gain visibility with
              advertisers, which could lead to direct collaboration
              opportunities.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(4)}>
              What social networks can I use to post?
            </AccordionHeader>
            <AccordionBody>
              With Verbyo, you can create content across all major
              social networks and get rewarded for it. Currently, we
              support Facebook, TikTok, Instagram, and X, but we are
              actively working to integrate additional platforms.
              Please note that each social network has specific
              minimum requirements for connecting your account.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(5)}>
              Is Verbyo free?
            </AccordionHeader>
            <AccordionBody>
              Yes, Verbyo is a free app for everyone to use. However,
              we do offer a few paid options that provide additional
              advantages. While we strive to keep Verbyo entirely
              free, these paid options help us fund platform
              development and maintain our independence from investors
              who could compromise our platform&apos;s philosophy.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(6)}>
              Why do I need to verify my account with Verbyo?
            </AccordionHeader>
            <AccordionBody>
              At Verbyo, our mission is to build a community of real
              people who can drive meaningful change in both local
              communities and the online social media landscape. To
              achieve this, we require account verification. Having a
              community of authentic users benefits everyone by
              attracting better-paid offers from advertisers and
              enhancing our efforts to combat misinformation and fake
              news. The funds collected from the verification process
              are exclusively used to attract new advertisers.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            icon={<Icon id={7} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(7)}>
              What happens to my data?
            </AccordionHeader>
            <AccordionBody>
              Your data is secure with us. We use it solely to help
              you identify the best content to post based on your
              initial preferences. We don’t sell your data, share it
              with third parties, or send you spam. If you choose to
              delete your account, your data will be permanently
              erased with no chance of retrieval. Should you decide to
              use Verbyo again, you&apos;ll need to start from
              scratch.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 8}
            icon={<Icon id={8} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(8)}>
              How do I delete my account with Verbyo?
            </AccordionHeader>
            <AccordionBody>
              Deleting your Verbyo account is a simple process. Just
              log in to your account using our mobile app, go to
              &quot;My Profile,&quot; and select the &quot;Delete My
              Account&quot; option. Alternatively, you can email us at
              support@verbyo.com using the email address associated
              with your account.
            </AccordionBody>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default QuestionsAccordion;
