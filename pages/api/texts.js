const texts = [
    // {
    //   content: 'body'
    // },
    {
        id: 0,
        title: 'Геополитика',
        content: 'Направление политической мысли, концепция о контроле над территорией, о закономерностях распределения и перераспределения сфер влияния различных государств и межгосударственных объединений. Геополитика относится к роду общественно-географических наук, является частью политической географии.'
    },
    {
        id: 1,
        title: 'Философия',
        content: 'Особая форма познания и система знаний об общих характеристиках, понятиях и принципах реальности, а также бытия человека, об отношении человека и окружающего его мира. К задачам философии на протяжении веков относились как изучение всеобщих законов развития мира и общества, так и изучение самого процесса познания и мышления, а также изучение нравственных категорий и ценностей.'
    },
    {
        id: 2,
        title: 'Психология',
        content: 'Гуманитарная научная дисциплина, изучающая закономерности возникновения, развития и функционирования психики и психической деятельности человека и групп людей. Тем не менее психология объединяет в себе гуманитарный и естественно-научный подходы.'
    },
    {
        id: 3,
        title: '',
        content: 'Парадом планет принято называть особое расположение пяти ярких планет Солнечной системы (Меркурия, Венеры, Марса, Юпитера и Сатурна), во время которого они одновременно находятся на небольшом расстоянии друг от друга. Как результат, их легко увидеть в небольшом секторе неба. Видимый парад планет лучше всего заметен вечером и утром. Все пять планет можно увидеть очень редко - раз в несколько десятилетий.'
    }
]

export default function handler(req, res) {
    res.status(200).json(texts)
}