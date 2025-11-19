import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-[600px] mx-auto text-center">
            <p className="font-mono text-green text-base mb-5">04. What's Next?</p>
            <h2 className="text-lightest-slate text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate text-lg mb-12">
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
                href="mailto:brittany.chiang@gmail.com"
                className="px-8 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-colors inline-block"
            >
                Say Hello
            </a>
        </div>
    );
};

export default Contact;
