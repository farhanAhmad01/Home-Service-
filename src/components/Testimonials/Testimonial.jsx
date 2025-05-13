import TestimonialCard from "../Card/TestimonialCard";
import user1 from "../../assets/user1.jpg.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";

const Service2 = () => {
    const clients = [
        {
            name: "Patrick Goodman",
            image: user1,
            review: "I’m really satisfied with the service—professional, timely, and efficient. Highly recommended!",
        },
        {
            name: "Luies",
            image: user2,
            review: "Great experience! The team was skilled and respectful. Will definitely use the service again.",
        },
        {
            name: "Jecob Goeckno",
            image: user3,
            review: "Quick response and excellent work. I appreciate the professionalism. Thank you!",
        },
    ];

    return (
        <>
            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full flex justify-between">
                            <div>
                                <h2 className="font-medium text-2xl">
                                    What Our Clients Say
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products list */}

            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {clients.map((client, index) => (
                            <TestimonialCard key={index} {...client} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service2;
