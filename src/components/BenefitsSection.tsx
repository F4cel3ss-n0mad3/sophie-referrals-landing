import React from 'react';
import { Monitor, QrCode, Settings } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Beneficios Clave
          </h2>
          <p className="text-xl text-gray-600">
            Confianza, control y crecimiento en una sola herramienta.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Monitor className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Panel de Comisiones en Tiempo Real
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Acaba con la desconfianza. Ofrece a tus parceros un dashboard intuitivo 
                donde pueden ver y validar cada comisión ganada, construyendo una relación 
                sólida y a largo plazo.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Transparencia total en cada transacción
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Actualizaciones en tiempo real
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Historial completo de comisiones
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Dashboard Parcero</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Comisión Pendiente</span>
                      <span className="font-semibold text-green-600">$1,250</span>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Este Mes</span>
                      <span className="font-semibold text-blue-600">$3,890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                    <QrCode className="h-24 w-24 text-green-600 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">Código único del parcero</p>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-20 h-20 bg-gray-200 rounded mx-auto flex items-center justify-center">
                        <QrCode className="h-12 w-12 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <QrCode className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Rastreo Preciso con Códigos QR
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Cada parcero tendrá su propio código QR único. Nuestro sistema rastrea 
                automáticamente la compra y asigna la comisión de manera precisa, 
                eliminando cualquier margen de error.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Códigos QR únicos por parcero
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Rastreo automático de ventas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Asignación precisa de comisiones
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Settings className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Gestión Centralizada para tu Agencia
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Desde tu propio panel de control, podrás gestionar a todos tus parceros, 
                ver el rendimiento de cada uno y procesar los pagos de manera sencilla y eficiente.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Panel de control centralizado
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Análisis de rendimiento por parcero
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Procesamiento automático de pagos
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Panel de Administración</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Parceros</span>
                    <span className="font-semibold text-purple-600">47</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ventas Este Mes</span>
                    <span className="font-semibold text-green-600">$28,450</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">Comisiones Pagadas</span>
                    <span className="font-semibold text-blue-600">$4,267</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;