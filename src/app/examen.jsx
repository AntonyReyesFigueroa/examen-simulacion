'use client'
import { useState, useEffect } from 'react';

const examenData = {
    "examen": {
        "organigramas": [
            {
                "pregunta": "¿Qué representa un organigrama microadministrativo?",
                "alternativas": [
                    "a) La estructura de varias organizaciones relacionadas",
                    "b) La estructura de una sola organización",
                    "c) La relación entre distintos departamentos de una organización",
                    "d) La jerarquía de un grupo de empresas"
                ],
                "respuesta_correcta": "b) La estructura de una sola organización"
            },
            {
                "pregunta": "¿Cuál es el alcance de un organigrama macroadministrativo?",
                "alternativas": [
                    "a) Solo una organización",
                    "b) Varios departamentos dentro de una empresa",
                    "c) Varias organizaciones o empresas relacionadas",
                    "d) El personal de una sola área"
                ],
                "respuesta_correcta": "c) Varias organizaciones o empresas relacionadas"
            },
            {
                "pregunta": "Un organigrama mesoadministrativo es útil para representar:",
                "alternativas": [
                    "a) Organizaciones de un mismo sector o actividad específica",
                    "b) Organizaciones en distintas partes del mundo",
                    "c) Organizaciones de distintos sectores",
                    "d) Un solo departamento de una empresa"
                ],
                "respuesta_correcta": "a) Organizaciones de un mismo sector o actividad específica"
            },
            {
                "pregunta": "¿Cuál es la principal finalidad de un organigrama informativo?",
                "alternativas": [
                    "a) Analizar las funciones y costos de cada área",
                    "b) Mostrar de forma sencilla las partes principales de una organización",
                    "c) Formalizar la estructura organizacional",
                    "d) Reflejar las relaciones no oficiales entre los empleados"
                ],
                "respuesta_correcta": "b) Mostrar de forma sencilla las partes principales de una organización"
            },
            {
                "pregunta": "El organigrama analítico se utiliza para:",
                "alternativas": [
                    "a) Mostrar solo la estructura jerárquica",
                    "b) Incluir información detallada sobre costos, funciones y relaciones",
                    "c) Mostrar solo las relaciones informales",
                    "d) Divulgar la estructura oficial de una empresa"
                ],
                "respuesta_correcta": "b) Incluir información detallada sobre costos, funciones y relaciones"
            },
            {
                "pregunta": "¿Qué tipo de organigrama es un reflejo oficial de la jerarquía de la organización?",
                "alternativas": [
                    "a) Informal",
                    "b) Formal",
                    "c) Analítico",
                    "d) Específico"
                ],
                "respuesta_correcta": "b) Formal"
            },
            {
                "pregunta": "¿Un organigrama informal refleja:",
                "alternativas": [
                    "a) La estructura oficial de una empresa",
                    "b) Cómo funciona realmente la organización sin aprobación oficial",
                    "c) Una representación detallada de los costos",
                    "d) La división jerárquica exacta de la empresa"
                ],
                "respuesta_correcta": "b) Cómo funciona realmente la organización sin aprobación oficial"
            },
            {
                "pregunta": "¿Qué caracteriza un organigrama general?",
                "alternativas": [
                    "a) Muestra solo un departamento específico",
                    "b) Incluye toda la estructura organizacional",
                    "c) Representa únicamente los puestos de dirección",
                    "d) No tiene jerarquías visibles"
                ],
                "respuesta_correcta": "b) Incluye toda la estructura organizacional"
            },
            {
                "pregunta": "¿Un organigrama específico se utiliza para:",
                "alternativas": [
                    "a) Representar todas las áreas de la organización",
                    "b) Detallar solo una área o departamento",
                    "c) Mostrar la jerarquía de varias empresas",
                    "d) Incluir todas las funciones de la empresa"
                ],
                "respuesta_correcta": "b) Detallar solo una área o departamento"
            },
            {
                "pregunta": "¿Cuál es la principal diferencia entre un organigrama integral y uno funcional?",
                "alternativas": [
                    "a) El integral incluye solo las funciones de cada área",
                    "b) El integral muestra todas las áreas administrativas y relaciones jerárquicas",
                    "c) El funcional muestra la jerarquía de cada puesto",
                    "d) El funcional detalla los recursos disponibles"
                ],
                "respuesta_correcta": "b) El integral muestra todas las áreas administrativas y relaciones jerárquicas"
            },
            {
                "pregunta": "Un organigrama funcional describe:",
                "alternativas": [
                    "a) Las funciones principales asignadas a cada área",
                    "b) Solo las jerarquías de los empleados",
                    "c) El número de empleados por área",
                    "d) El nombre de los responsables de cada área"
                ],
                "respuesta_correcta": "a) Las funciones principales asignadas a cada área"
            },
            {
                "pregunta": "¿Qué se representa en un organigrama de puestos, plazas y unidades?",
                "alternativas": [
                    "a) Los niveles jerárquicos de la organización",
                    "b) El número de empleados y plazas necesarias",
                    "c) Solo las funciones de cada puesto",
                    "d) Las relaciones informales entre los empleados"
                ],
                "respuesta_correcta": "b) El número de empleados y plazas necesarias"
            },
            {
                "pregunta": "Un organigrama vertical se caracteriza por:",
                "alternativas": [
                    "a) Las jerarquías van de izquierda a derecha",
                    "b) Mostrar las relaciones de trabajo dentro de cada departamento",
                    "c) Las jerarquías van de arriba hacia abajo",
                    "d) Ser más detallado que los organigramas horizontales"
                ],
                "respuesta_correcta": "c) Las jerarquías van de arriba hacia abajo"
            },
            {
                "pregunta": "¿Qué tipo de organigrama muestra las jerarquías de izquierda a derecha?",
                "alternativas": [
                    "a) Vertical",
                    "b) Mixto",
                    "c) Horizontal",
                    "d) De bloque"
                ],
                "respuesta_correcta": "c) Horizontal"
            },
            {
                "pregunta": "¿Cuál es la principal característica de un organigrama mixto?",
                "alternativas": [
                    "a) Combina elementos verticales y horizontales",
                    "b) Tiene solo una jerarquía principal",
                    "c) Solo tiene un nivel de jerarquía",
                    "d) Muestra solo las funciones de los puestos"
                ],
                "respuesta_correcta": "a) Combina elementos verticales y horizontales"
            },
            {
                "pregunta": "¿Qué tipo de organigrama tiene una mayor densidad de información, mostrando la jerarquía y varios elementos adicionales?",
                "alternativas": [
                    "a) Vertical",
                    "b) Horizontal",
                    "c) De bloque",
                    "d) Circular"
                ],
                "respuesta_correcta": "c) De bloque"
            },
            {
                "pregunta": "¿Un organigrama circular tiene la autoridad central en?",
                "alternativas": [
                    "a) El centro, con los niveles menores hacia el exterior",
                    "b) La parte superior de la jerarquía",
                    "c) El nivel más bajo de la estructura",
                    "d) Los extremos de la jerarquía"
                ],
                "respuesta_correcta": "a) El centro, con los niveles menores hacia el exterior"
            },
            {
                "pregunta": "¿Qué tipo de organigrama es útil para representar una cadena hotelera con varios restaurantes y bares asociados?",
                "alternativas": [
                    "a) Vertical",
                    "b) Horizontal",
                    "c) Macroadministrativo",
                    "d) Informativo"
                ],
                "respuesta_correcta": "c) Macroadministrativo"
            },
            {
                "pregunta": "¿Un organigrama de una cadena de restaurantes reconocido por su dirección es un ejemplo de?",
                "alternativas": [
                    "a) Informal",
                    "b) Formal",
                    "c) Analítico",
                    "d) Específico"
                ],
                "respuesta_correcta": "b) Formal"
            },
            {
                "pregunta": "¿Cuál de los siguientes organigramas refleja las relaciones informales entre empleados?",
                "alternativas": [
                    "a) Formal",
                    "b) Informal",
                    "c) Específico",
                    "d) Integrales"
                ],
                "respuesta_correcta": "b) Informal"
            },
            {
                "pregunta": "¿Qué organigrama es ideal para mostrar la estructura jerárquica de una empresa multinacional?",
                "alternativas": [
                    "a) Vertical",
                    "b) Horizontal",
                    "c) Macroadministrativo",
                    "d) Específico"
                ],
                "respuesta_correcta": "c) Macroadministrativo"
            },
            {
                "pregunta": "¿Qué se entiende por un organigrama funcional?",
                "alternativas": [
                    "a) Organiza la empresa por funciones específicas",
                    "b) Organiza la empresa por jerarquías",
                    "c) Refleja las relaciones informales dentro de la empresa",
                    "d) Muestra las relaciones entre diferentes empresas"
                ],
                "respuesta_correcta": "a) Organiza la empresa por funciones específicas"
            },
            {
                "pregunta": "¿Qué tipo de organigrama se usa para mostrar relaciones jerárquicas de una empresa pequeña?",
                "alternativas": [
                    "a) Vertical",
                    "b) Horizontal",
                    "c) Específico",
                    "d) Analítico"
                ],
                "respuesta_correcta": "a) Vertical"
            },
            {
                "pregunta": "¿En qué tipo de organigrama se representa un flujo de información de arriba hacia abajo?",
                "alternativas": [
                    "a) Circular",
                    "b) Vertical",
                    "c) Horizontal",
                    "d) Mixto"
                ],
                "respuesta_correcta": "b) Vertical"
            },
            {
                "pregunta": "¿En qué organigrama se suele visualizar la distribución de unidades dentro de una organización?",
                "alternativas": [
                    "a) De bloques",
                    "b) Vertical",
                    "c) Funcional",
                    "d) Específico"
                ],
                "respuesta_correcta": "a) De bloques"
            },
            {
                "pregunta": "¿Qué tipo de organigrama muestra una visión más amplia de la organización, con poco detalle en la jerarquía?",
                "alternativas": [
                    "a) General",
                    "b) Específico",
                    "c) Analítico",
                    "d) Vertical"
                ],
                "respuesta_correcta": "a) General"
            },
            {
                "pregunta": "¿Cuál es la característica de un organigrama de bloques?",
                "alternativas": [
                    "a) Muestra las unidades y departamentos de la empresa",
                    "b) Presenta la estructura jerárquica de la empresa",
                    "c) Incluye solo los nombres de los empleados",
                    "d) No tiene relación con jerarquías"
                ],
                "respuesta_correcta": "a) Muestra las unidades y departamentos de la empresa"
            },
            {
                "pregunta": "¿El organigrama circular puede ser útil en qué tipo de empresas?",
                "alternativas": [
                    "a) Empresas con una estructura jerárquica bien definida",
                    "b) Empresas con una estructura descentralizada",
                    "c) Empresas familiares",
                    "d) Empresas con pocos niveles jerárquicos"
                ],
                "respuesta_correcta": "b) Empresas con una estructura descentralizada"
            },
            {
                "pregunta": "¿Cuál es una ventaja del organigrama mixto?",
                "alternativas": [
                    "a) Muestra claramente la jerarquía",
                    "b) Combina claridad y funcionalidad",
                    "c) Se adapta bien a empresas de gran tamaño",
                    "d) Muestra solo los cargos directivos"
                ],
                "respuesta_correcta": "b) Combina claridad y funcionalidad"
            }
        ]
    }
}


const Examen = () => {
    const [preguntaActualIndex, setPreguntaActualIndex] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const [calificacion, setCalificacion] = useState(null);
    const [preguntasBarajadas, setPreguntasBarajadas] = useState([]);
    const [mostrarRespuestasCorrectas, setMostrarRespuestasCorrectas] = useState(false);

    useEffect(() => {
        // Barajar las preguntas solo en el cliente
        const preguntasAleatorias = [...examenData.examen.organigramas].sort(() => Math.random() - 0.5);
        setPreguntasBarajadas(preguntasAleatorias);
    }, []); // Este efecto se ejecuta solo una vez cuando el componente se monta

    const seleccionarRespuesta = (respuesta) => {
        const nuevaRespuesta = [...respuestas];
        nuevaRespuesta[preguntaActualIndex] = respuesta;
        setRespuestas(nuevaRespuesta);
    };

    const siguientePregunta = () => {
        if (preguntaActualIndex < preguntasBarajadas.length - 1) {
            setPreguntaActualIndex(preguntaActualIndex + 1);
        } else {
            calcularCalificacion();
        }
    };

    const calcularCalificacion = () => {
        let puntaje = 0;
        preguntasBarajadas.forEach((pregunta, index) => {
            if (respuestas[index] === pregunta.respuesta_correcta) {
                puntaje++;
            }
        });
        setCalificacion(puntaje);
    };

    const volverADarExamen = () => {
        setRespuestas([]);
        setPreguntaActualIndex(0);
        setCalificacion(null);
        setMostrarRespuestasCorrectas(false);  // Reseteamos la visualización de respuestas correctas
    };

    const verRespuestasCorrectas = () => {
        setMostrarRespuestasCorrectas(true);
    };

    // Si las preguntas no están barajadas aún, no renderizar nada
    if (preguntasBarajadas.length === 0) {
        return <div>Loading...</div>;
    }

    const preguntaActual = preguntasBarajadas[preguntaActualIndex];

    return (
        <div className="max-w-2xl mx-auto mt-10 p-4 sm:p-6">
            <h1 className="text-3xl font-semibold text-center">Examen de Organigramas</h1>
            <div className="mt-6">
                {preguntaActual && (
                    <>
                        <h2 className="text-xl">
                            Pregunta {preguntaActualIndex + 1}: {preguntaActual.pregunta}
                        </h2>
                        <div className="mt-4">
                            {preguntaActual.alternativas.map((alternativa, index) => (
                                <div key={index} className="flex items-center space-x-2 mb-4">
                                    <input
                                        type="radio"
                                        id={`respuesta-${index}`}
                                        name="respuesta"
                                        value={alternativa}
                                        checked={respuestas[preguntaActualIndex] === alternativa}
                                        onChange={() => seleccionarRespuesta(alternativa)}
                                        className="h-4 w-4 text-blue-600"
                                    />
                                    <label htmlFor={`respuesta-${index}`} className="text-lg">{alternativa}</label>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={siguientePregunta}
                    disabled={!respuestas[preguntaActualIndex]} // Deshabilitar si no hay respuesta seleccionada
                    className="px-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-400"
                >
                    {preguntaActualIndex < preguntasBarajadas.length - 1 ? 'Siguiente pregunta' : 'Terminar examen'}
                </button>

                {calificacion !== null && (
                    <div>
                        <h3 className="text-xl text-center mt-6">
                            Tu calificación es: {calificacion} de {preguntasBarajadas.length}
                        </h3>
                        <button
                            onClick={verRespuestasCorrectas}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Ver respuestas correctas
                        </button>
                    </div>
                )}
            </div>

            {mostrarRespuestasCorrectas && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Respuestas Correctas:</h3>
                    <ul className="mt-4">
                        {preguntasBarajadas.map((pregunta, index) => {
                            const respuestaSeleccionada = respuestas[index];
                            const esCorrecta = respuestaSeleccionada === pregunta.respuesta_correcta;
                            return (
                                <li key={index} className="mb-4">
                                    <strong>{index + 1}. {pregunta.pregunta}</strong> {/* Numeración aquí */}
                                    <div className="mt-2">
                                        {pregunta.alternativas.map((alternativa, altIndex) => {
                                            let className = '';
                                            if (alternativa === respuestaSeleccionada) {
                                                className = esCorrecta ? 'text-green-500' : 'text-red-500';
                                            }
                                            if (alternativa === pregunta.respuesta_correcta && !esCorrecta) {
                                                className = 'text-green-500';
                                            }
                                            return (
                                                <div key={altIndex} className={`text-lg ${className}`}>
                                                    {alternativa}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        onClick={volverADarExamen}
                        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
                    >
                        Volver a dar el examen
                    </button>
                </div>
            )}


        </div>
    );
};

export default Examen;