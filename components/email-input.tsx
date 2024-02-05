import { useState } from "react";

export default function EmailInput(){
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    const thankyou_message = "¡Gracias por elegir Elizabeth Haircare para tu cuidado capilar! Estamos emocionados de compartir contigo el viaje hacia un cabello más saludable y hermoso."
    const title = "Mantengamos la Conversación"
    const subtitle = "Introduce tu dirección de correo electrónico a continuación y únete a nuestra comunidad. Prometemos cuidar tu bandeja de entrada y enviarte solo información valiosa."
    return(
        <section className="p-5 bg-rose-300/50 py-16 md:py-32">
        <form onSubmit={handleSubmit} className="mx-auto w-full ">
            <label htmlFor="email" className="block mx-auto text-center text-xl md:text-2xl my-2 font-semibold ">{submitted ? thankyou_message : title}</label>
            <div className="flex flex-col items-center  ">
                <h2 className="text-center text-gray-600 py-2">
                    {subtitle}
                </h2>
                <input 
                    placeholder="Tu correo electronico aqui"
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white rounded-md text-primary-foreground w-full md:w-1/2 shadow p-2 m-2"
                    required
                />
                <button 
                    type="submit"
                    className="bg-rose-400/50 rounded-md max-w-sm text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                >
                    Enviar
                </button>
            </div>
        </form>
        </section>
    )
}