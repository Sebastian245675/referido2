
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Estudiantes Activos",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "Recursos Educativos",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: "95%",
      label: "Tasa de Éxito",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      value: "$2,500",
      label: "Promedio Referidos/Mes",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
