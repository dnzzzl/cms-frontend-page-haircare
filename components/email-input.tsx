"use client"
import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./accordion"
import { postEmailFeedbackForm } from "../lib/api";

export default function EmailInput(){
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        postEmailFeedbackForm(email);
        setSubmitted(true);
    }

    const thankyou_message = "¡Gracias por elegir Elizabeth Haircare para tu cuidado capilar! Aun estamos trabajando para compartir contigo tips y contenido para un cabello más saludable y hermoso."
    const title = "Mantengamos la Conversación"
    const subtitle = "Introduce tu dirección de correo electrónico a continuación y únete a nuestra comunidad. Prometemos cuidar tu bandeja de entrada y enviarte solo información valiosa."

    return(
        <section className="p-5 bg-rose-300/50 py-16 md:py-32">
        <form onSubmit={handleSubmit} className="mx-auto w-full ">
            <label htmlFor="email" className="block mx-auto text-center text-xl md:text-2xl my-2 font-semibold ">{submitted ? thankyou_message : title}</label>
            <div className="flex flex-col items-center  ">
                <h2 className="text-center text-gray-700 py-2">
                    {subtitle}
                </h2>
                <input 
                    placeholder="Registrarte en nuestra lista!"
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white rounded-md text-primary-foreground w-full md:w-1/2 shadow p-2 m-2"
                    
                />
                <button 
                    type="submit"
                    className="bg-rose-400/50 rounded-md max-w-sm text-primary-foreground shadow  h-9 px-4 py-2"
                    
                >
                    Enviar
                </button>
            </div>
        </form>
        
        <div className=" mt-2 text-gray-700">
        <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Beneficios de Suscribirse:</AccordionTrigger>
                    <AccordionContent className="px-2">
                        Acceso exclusivo a ofertas y descuentos especiales.
                    </AccordionContent>
                    <AccordionContent className="px-2">
                        Primera vista de nuevos productos y lanzamientos.
                    </AccordionContent>
                    <AccordionContent className="px-2">
                        Consejos y trucos de expertos para el cuidado capilar.
                    </AccordionContent>
                    <AccordionContent className="px-2">
                        Actualizaciones sobre eventos y participación en la comunidad.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

        </section>
    )
}