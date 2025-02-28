// import React, { useEffect, useRef } from 'react';
// import { Application, Assets, Sprite, Ticker } from 'pixi.js';

// // Создаем функциональный компонент PixiApp
// const PixiApp: React.FC = () => {
//     // Используем useRef для хранения ссылки на canvas
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);

//     useEffect(() => {
//         // Асинхронная функция для инициализации PixiJS
//         const initPixiApp = async () => {
//             // Создаем приложение PixiJS
//             const app = new Application();

//             // Инициализируем приложение
//             await app.init({ background: '#1099bb', resizeTo: window });

//             // Добавляем canvas в DOM
//             if (canvasRef.current) {
//                 canvasRef.current.appendChild(app.canvas);
//             }

//             // Загружаем текстуру кролика
//             const texture = await Assets.load('/dino1.png');

//             // Создаем спрайт из текстуры
//             const bunny = new Sprite(texture);
//             bunny.width = 100;
//             bunny.height = 100;

//             // Добавляем спрайт на сцену
//             app.stage.addChild(bunny);

//             // Центрируем точку привязки спрайта
//             bunny.anchor.set(0.5);

//             // Перемещаем спрайт в центр экрана
//             bunny.x = app.screen.width / 2;
//             bunny.y = app.screen.height / 2;

//             // Добавляем анимацию вращения
//             app.ticker.add((time: Ticker) => {
//                 bunny.rotation += 0.1 * time.deltaTime;
//             });
//         };

//         // Вызываем функцию инициализации
//         initPixiApp().catch((error) => {
//             console.error('Error initializing PixiApp:', error);
//         });

//         // Очистка при размонтировании компонента
//         return () => {
//             // Здесь можно добавить логику для очистки ресурсов PixiJS, если это необходимо
//         };
//     }, []);

//     // Возвращаем canvas, который будет использоваться для рендеринга PixiJS
//     return <div ref={canvasRef} />;
// };

// export default PixiApp;






// import React, { useEffect, useRef, useState } from 'react';
// import { Application, Assets, Sprite } from 'pixi.js';

// // Создаем функциональный компонент PixiApp
// const PixiApp: React.FC = () => {
//     // Используем useRef для хранения ссылки на canvas
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);

//     // Состояние для хранения скорости движения
//     const [velocity, setVelocity] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         // Асинхронная функция для инициализации PixiJS
//         const initPixiApp = async () => {
//             // Создаем приложение PixiJS
//             const app = new Application();

//             // Инициализируем приложение
//             await app.init({ background: '#1099bb', resizeTo: window });

//             // Добавляем canvas в DOM
//             if (canvasRef.current) {
//                 canvasRef.current.appendChild(app.canvas);
//             }

//             // Загружаем текстуру кролика
//             const texture = await Assets.load('/dino7.png');

//             // Создаем спрайт из текстуры
//             const bunny = new Sprite(texture);
//             bunny.width = 100;
//             bunny.height = 100;

//             // Добавляем спрайт на сцену
//             app.stage.addChild(bunny);

//             // Центрируем точку привязки спрайта
//             bunny.anchor.set(0.5);

//             // Устанавливаем начальную позицию слева
//             bunny.x = 100; // 100px от левого края
//             bunny.y = app.screen.height / 2; // По центру по вертикали

//             // Обработка нажатий клавиш
//             const keys: { [key: string]: boolean } = {};

//             const handleKeyDown = (e: KeyboardEvent) => {
//                 keys[e.key] = true;
//             };

//             const handleKeyUp = (e: KeyboardEvent) => {
//                 keys[e.key] = false;
//             };

//             window.addEventListener('keydown', handleKeyDown);
//             window.addEventListener('keyup', handleKeyUp);

//             // Добавляем обновление позиции спрайта в игровом цикле
//             app.ticker.add(() => {
//                 const speed = 5; // Скорость движения

//                 if (keys['w'] || keys['W']) {
//                     bunny.y -= speed; // Движение вверх
//                 }
//                 if (keys['s'] || keys['S']) {
//                     bunny.y += speed; // Движение вниз
//                 }
//                 if (keys['a'] || keys['A']) {
//                     bunny.x -= speed; // Движение влево
//                 }
//                 if (keys['d'] || keys['D']) {
//                     bunny.x += speed; // Движение вправо
//                 }
//             });

//             // Очистка при размонтировании компонента
//             return () => {
//                 window.removeEventListener('keydown', handleKeyDown);
//                 window.removeEventListener('keyup', handleKeyUp);
//                 app.destroy(); // Уничтожаем приложение PixiJS
//             };
//         };

//         // Вызываем функцию инициализации
//         initPixiApp().catch((error) => {
//             console.error('Error initializing PixiApp:', error);
//         });
//     }, []);

//     // Возвращаем canvas, который будет использоваться для рендеринга PixiJS
//     return <div ref={canvasRef} />;
// };

// export default PixiApp;






// import React, { useEffect, useRef } from 'react';
// import { Application, Assets, Sprite } from 'pixi.js';

// // Создаем функциональный компонент PixiApp
// const PixiApp: React.FC = () => {
//     // Используем useRef для хранения ссылки на canvas
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);

//     useEffect(() => {
//         // Асинхронная функция для инициализации PixiJS
//         const initPixiApp = async () => {
//             // Создаем приложение PixiJS
//             const app = new Application();

//             // Инициализируем приложение
//             await app.init({ background: '#1099bb', resizeTo: window });

//             // Добавляем canvas в DOM
//             if (canvasRef.current) {
//                 canvasRef.current.appendChild(app.canvas);
//             }

//             // Загружаем текстуру кролика
//             const texture = await Assets.load('/dino7.png');

//             // Создаем спрайт из текстуры
//             const bunny = new Sprite(texture);
//             bunny.width = 100;
//             bunny.height = 100;

//             // Добавляем спрайт на сцену
//             app.stage.addChild(bunny);

//             // Центрируем точку привязки спрайта
//             bunny.anchor.set(0.5);

//             // Устанавливаем начальную позицию слева
//             bunny.x = 100; // 100px от левого края
//             bunny.y = app.screen.height / 2; // По центру по вертикали

//             // Обработка нажатий клавиш
//             const keys: { [key: string]: boolean } = {};

//             const handleKeyDown = (e: KeyboardEvent) => {
//                 keys[e.key.toLowerCase()] = true; // Приводим к нижнему регистру
//             };

//             const handleKeyUp = (e: KeyboardEvent) => {
//                 keys[e.key.toLowerCase()] = false; // Приводим к нижнему регистру
//             };

//             // Добавляем обработчики событий на window
//             window.addEventListener('keydown', handleKeyDown);
//             window.addEventListener('keyup', handleKeyUp);

//             // Добавляем обновление позиции спрайта в игровом цикле
//             app.ticker.add(() => {
//                 const speed = 5; // Скорость движения

//                 if (keys['w']) {
//                     bunny.y -= speed; // Движение вверх
//                 }
//                 if (keys['s']) {
//                     bunny.y += speed; // Движение вниз
//                 }
//                 if (keys['a']) {
//                     bunny.x -= speed; // Движение влево
//                 }
//                 if (keys['d']) {
//                     bunny.x += speed; // Движение вправо
//                 }
//             });

//             // Очистка при размонтировании компонента
//             return () => {
//                 window.removeEventListener('keydown', handleKeyDown);
//                 window.removeEventListener('keyup', handleKeyUp);
//                 app.destroy(); // Уничтожаем приложение PixiJS
//             };
//         };

//         // Вызываем функцию инициализации
//         initPixiApp().catch((error) => {
//             console.error('Error initializing PixiApp:', error);
//         });
//     }, []);

//     // Возвращаем canvas, который будет использоваться для рендеринга PixiJS
//     return <div ref={canvasRef} />;
// };

// export default PixiApp;




import React, { useEffect, useRef, useState } from 'react';
import { Application, Assets, Sprite } from 'pixi.js';

const PixiApp: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

    // Обработка нажатий клавиш
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKeys((prevKeys) => ({ ...prevKeys, [e.key.toLowerCase()]: true }));
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            setKeys((prevKeys) => ({ ...prevKeys, [e.key.toLowerCase()]: false }));
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    // Инициализация PixiJS
    useEffect(() => {
        const initPixiApp = async () => {
            const app = new Application();
            await app.init({ background: '#1099bb', resizeTo: window });

            if (canvasRef.current) {
                canvasRef.current.appendChild(app.canvas);
            }

            const texture = await Assets.load('/dino7.png');
            const bunny = new Sprite(texture);
            bunny.width = 100;
            bunny.height = 100;

            app.stage.addChild(bunny);
            bunny.anchor.set(0.5);
            bunny.x = 100; // Начальная позиция слева
            bunny.y = app.screen.height / 2; // По центру по вертикали

            // Игровой цикл
            app.ticker.add(() => {
                const speed = 5;

                if (keys['w']) {
                    bunny.y -= speed; // Движение вверх
                }
                if (keys['s']) {
                    bunny.y += speed; // Движение вниз
                }
                if (keys['a']) {
                    bunny.x -= speed; // Движение влево
                }
                if (keys['d']) {
                    bunny.x += speed; // Движение вправо
                }
            });

            // Очистка при размонтировании
            return () => {
                app.destroy();
            };
        };

        initPixiApp().catch((error) => {
            console.error('Error initializing PixiApp:', error);
        });
    }, [keys]); // Зависимость от состояния клавиш

    return <div ref={canvasRef} tabIndex={0} style={{ outline: 'none' }} />;
};

export default PixiApp;