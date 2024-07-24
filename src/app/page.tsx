'use client'
import Head from 'next/head';
import Image from "next/image";
import { Row, Col, Button } from 'antd';
//import { AiOutlineRocket, AiOutlineDatabase, AiOutlineSetting, AiOutlineDeploymentUnit, AiOutlineCarryOut } from 'react-icons/ai';
import * as AiIcons from 'react-icons/ai';
//import Icon from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen mx-auto bg-gradient-to-br from-sky-blue-light to-sky-blue-dark">
      <Head>
        <title>Help One Another | Your finances made simple.</title>
        <meta name="description" content="Import your statements and let us do the rest." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`fixed top-0 w-full transition-all duration-500 flex justify-between items-center px-10 py-4 ${isScrolled ? 'bg-gray-800' : ''}`}>

        <div className="relative md:hidden">
          <Image
            src="/hoa-iso-logo-bw.png"
            alt="Help One Another Logo"
            width={200}
            height={70}
            priority
          />
        </div>
        <div className="relative hidden md:block 2xl:hidden">
          <Image
            src="/hoa-iso-logo-bw.png"
            alt="Help One Another Logo"
            width={300}
            height={70}
            priority
          />
        </div>
        <div className="relative hidden 2xl:block">
          <Image
            src="/hoa-iso-logo-bw.png"
            alt="Help One Another Logo"
            width={350}
            height={70}
            priority
          />
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="#services" className="text-white hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">About</a>
            </li>
            <li>
              <a href="https://calendly.com/lschnoller/free-consultation" className="text-white hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* separator */}
      <div className="h-16 md:h-20"></div>
      <main className="flex flex-col min-h-screen justify-center items-center md:px-40 px-20 pt-40 2xl:pt-40">
        <section className="mb-28 2xl:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >

            <h1 className="text-3xl 2xl:text-4xl font-bold text-center text-white mb-7">
              Import your bank statements. Let us do the rest.
            </h1>
            <p className="text-xl text-center text-gray-200 mb-20">
              Stop spending your time analyzing your results. We use the latest <u>AI technology</u> to process your bank statements and give you full details about your finances and results.
            </p>
            <div className='mx-auto block text-center'>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full">
                <a href="https://calendly.com/lschnoller/free-consultation">Get Free Consultation</a>
              </button>
            </div>
          </motion.div>
        </section>
        <section id="services" className="mt-30 mb-56 max-w-7xl">
          {/* <h2 className="text-2xl font-semibold text-center text-white mb-8">Our Key Services</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineFund className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">AI Automated Financial Results</h3>
              <p className="text-gray-300 text-center leading-snug">
                Simple. Get a clear idea of your results just by importing your bank statements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineGlobal className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">All Resources in One Place</h3>
              <p className="text-gray-300 text-center">
                Get a complete overview: bank accounts, taxes, investments, loans, etc.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineSafety className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Private by Design</h3>
              <p className="text-gray-300 text-center">
                Our system anonymizes all of your data, keeping it private by design.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineCreditCard className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Accounts Payable</h3>
              <p className="text-gray-300 text-center">
                Never be late for a payment again. Manage your bills with ease.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineDollar className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Accounts Receivable</h3>
              <p className="text-gray-300 text-center">
                Add your service contracts and let us follow-up with your clients&apos; payments.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <AiIcons.AiOutlineUsergroupAdd className="text-4xl text-white mb-4" />
              <h3 className="text-lg font-medium text-white mb-2 text-center">Share with your Accountant</h3>
              <p className="text-gray-300 text-center">
                Allow access to your accountant for accounting services.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}
