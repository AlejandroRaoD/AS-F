type ProgramaProps = {
    data: {
        _id: string;
        nombre: string;
        descripcion: string;
    };
};

// Componente recibe objeto 'data' de tipo ProgramaProps y lo muestra
export const ProgramaItem = ({ data }: ProgramaProps) => {
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-700">{data.nombre}</h2>
            <p className="text-sm text-gray-500">{data.descripcion}</p>
        </div>
    );
};