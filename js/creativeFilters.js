/**
 * 创意滤镜数据
 * 预设效果 + 50种创意滤镜效果，按8个分类组织
 */
export const creativeFilterCategories = [
    {
        key: 'presets',
        name: '预设效果',
        filters: [
            {
                key: 'original',
                name: '原始',
                description: '适用场景：所有场景恢复\n效果描述：图片原始\n状态，清除所有调整',
                params: { brightness: 0, contrast: 0, saturation: 0, hue: 0, lightness: 0, colorTemperature: 0, exposure: 0, highlights: 0, shadows: 0, vibrance: 0, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'bright',
                name: '明亮',
                description: '适用场景：室内、阴天、暗光场景\n效果描述：提高整体亮度，让画面更加明亮通透',
                params: { brightness: 30, contrast: 10, saturation: 5, hue: 0, lightness: 0, colorTemperature: 0, exposure: 10, highlights: 10, shadows: 0, vibrance: 0, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'dark',
                name: '暗调',
                description: '适用场景：人像、静物、情绪片\n效果描述：降低整体亮度，营造沉稳低调的氛围',
                params: { brightness: -30, contrast: 20, saturation: -10, hue: 0, lightness: 0, colorTemperature: 0, exposure: -10, highlights: 0, shadows: -20, vibrance: 0, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'high-contrast',
                name: '高对比',
                description: '适用场景：风景、建筑、街拍\n效果描述：增强明暗对比，让画面更具冲击力',
                params: { brightness: 0, contrast: 50, saturation: 20, hue: 0, lightness: 0, colorTemperature: 0, exposure: 0, highlights: -10, shadows: -10, vibrance: 0, clarity: 20, toneCurve: 30 }
            },
            {
                key: 'grayscale',
                name: '黑白',
                description: '适用场景：人像、街拍、艺术创作\n效果描述：去除所有色彩，经典黑白影调',
                params: { brightness: 0, contrast: 10, saturation: -100, hue: 0, lightness: 0, colorTemperature: 0, exposure: 0, highlights: 0, shadows: 0, vibrance: 0, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'warm',
                name: '暖色',
                description: '适用场景：人像、日落、美食\n效果描述：增加暖色调，让画面温暖柔和',
                params: { brightness: 10, contrast: 5, saturation: 20, hue: 20, lightness: 0, colorTemperature: 30, exposure: 0, highlights: 0, shadows: 0, vibrance: 10, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'cool',
                name: '冷色',
                description: '适用场景：风景、夜景、科技感\n效果描述：增加冷色调，营造冷静清爽的氛围',
                params: { brightness: 0, contrast: 10, saturation: -10, hue: -20, lightness: 0, colorTemperature: -30, exposure: 0, highlights: 0, shadows: 0, vibrance: 0, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'vintage',
                name: '复古',
                description: '适用场景：人像、街拍、旅行\n效果描述：复古胶片风格，带有轻微褪色和暖色调',
                params: { brightness: -10, contrast: 20, saturation: -30, hue: 10, lightness: 0, colorTemperature: 20, exposure: -10, highlights: -10, shadows: 10, vibrance: -20, clarity: -10, toneCurve: -20 }
            }
        ]
    },
    {
        key: 'retro',
        name: '复古风格',
        filters: [
            {
                key: 'film-nostalgia',
                name: '胶片时光',
                description: '适用场景：人像、街拍、旅行\n效果描述：模拟柯达 Gold 200 胶片质感，暖色调带有轻微褪色感',
                params: { brightness: 0, contrast: 15, saturation: -20, hue: 0, lightness: 0, colorTemperature: 15, exposure: 0, highlights: -5, shadows: 5, vibrance: -10, clarity: 0, toneCurve: 10 }
            },
            {
                key: 'faded-memory',
                name: '褪色记忆',
                description: '适用场景：人像、静物、日记风\n效果描述：低对比褪色效果，仿佛隔了一层薄雾的旧照片',
                params: { brightness: 5, contrast: -25, saturation: -35, hue: 0, lightness: 10, colorTemperature: 5, exposure: 5, highlights: 10, shadows: 15, vibrance: -20, clarity: -15, toneCurve: -10 }
            },
            {
                key: 'grain-cinema',
                name: '颗粒电影',
                description: '适用场景：街拍、夜景、电影感画面\n效果描述：高颗粒感的电影胶片风格，带有强烈的暗角和戏剧性',
                params: { brightness: -5, contrast: 20, saturation: -10, hue: 0, lightness: -5, colorTemperature: 5, exposure: -5, highlights: -10, shadows: -15, vibrance: -5, clarity: 10, toneCurve: 15 }
            },
            {
                key: 'lens-haze',
                name: '光晕迷离',
                description: '适用场景：人像、婚礼、浪漫场景\n效果描述：模拟老镜头的光晕和柔焦效果，画面温暖梦幻',
                params: { brightness: 10, contrast: -10, saturation: -5, hue: 5, lightness: 5, colorTemperature: 15, exposure: 10, highlights: 15, shadows: 5, vibrance: -5, clarity: -20, toneCurve: 0 }
            },
            {
                key: 'polaroid-instant',
                name: '宝丽来',
                description: '适用场景：聚会、旅行、日常记录\n效果描述：经典宝丽来即时成像风格，带有标志性的偏色',
                params: { brightness: 5, contrast: 10, saturation: -5, hue: 5, lightness: 0, colorTemperature: 10, exposure: 5, highlights: 5, shadows: 5, vibrance: -10, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'sepia-classic',
                name: '褐色怀旧',
                description: '适用场景：老建筑、人像、历史感场景\n效果描述：经典褐色调怀旧风格，仿佛19世纪的老照片',
                params: { brightness: -5, contrast: 5, saturation: -60, hue: 15, lightness: -5, colorTemperature: 20, exposure: -5, highlights: -5, shadows: 5, vibrance: -30, clarity: 0, toneCurve: -5 }
            },
            {
                key: 'japanese-fresh',
                name: '日系清新',
                description: '适用场景：人像、风景、日常生活\n效果描述：日系小清新风格，整体偏亮偏淡，带有淡淡的蓝绿色调',
                params: { brightness: 10, contrast: -10, saturation: -15, hue: -5, lightness: 10, colorTemperature: -5, exposure: 10, highlights: 5, shadows: 10, vibrance: -10, clarity: -10, toneCurve: 5 }
            },
            {
                key: 'retro-neon',
                name: '复古霓虹',
                description: '适用场景：夜景、城市、人像\n效果描述：80年代霓虹灯下的复古色调，粉紫与青色交织',
                params: { brightness: -5, contrast: 15, saturation: 10, hue: 10, lightness: -5, colorTemperature: -10, exposure: -5, highlights: 5, shadows: -10, vibrance: 10, clarity: 5, toneCurve: 10 }
            }
        ]
    },
    {
        key: 'color-art',
        name: '色彩艺术',
        filters: [
            {
                key: 'duotone-blend',
                name: '双色交融',
                description: '适用场景：人像、海报、封面设计\n效果描述：经典双色调效果，深紫与琥珀色形成强烈视觉冲击',
                params: { brightness: 0, contrast: 20, saturation: 30, hue: 30, lightness: 0, colorTemperature: 10, exposure: 0, highlights: 5, shadows: -10, vibrance: 20, clarity: 10, toneCurve: 15 }
            },
            {
                key: 'split-tone',
                name: '色调分离',
                description: '适用场景：风景、建筑、电影感画面\n效果描述：高光暖黄与阴影冷蓝的色调分离，营造电影级色彩层次',
                params: { brightness: 0, contrast: 15, saturation: 10, hue: -10, lightness: 0, colorTemperature: -10, exposure: 0, highlights: 10, shadows: -15, vibrance: 10, clarity: 5, toneCurve: 10 }
            },
            {
                key: 'gradient-map',
                name: '渐变映射',
                description: '适用场景：艺术创作、海报、概念设计\n效果描述：将亮度映射到自定义渐变色阶，创造超现实的色彩过渡',
                params: { brightness: -10, contrast: 25, saturation: 20, hue: 20, lightness: -5, colorTemperature: 5, exposure: -5, highlights: 5, shadows: -10, vibrance: 15, clarity: 10, toneCurve: 20 }
            },
            {
                key: 'color-invert',
                name: '色彩反转',
                description: '适用场景：艺术创作、实验摄影、创意设计\n效果描述：完全反转色彩，创造出负片般的超现实视觉效果',
                params: { brightness: 0, contrast: 15, saturation: 10, hue: 180, lightness: 0, colorTemperature: 0, exposure: 0, highlights: -10, shadows: -10, vibrance: 10, clarity: 0, toneCurve: 0 }
            },
            {
                key: 'morandi-gray',
                name: '莫兰迪灰调',
                description: '适用场景：人像、静物、室内设计\n效果描述：低饱和度的莫兰迪色系，高级灰调营造静谧优雅的氛围',
                params: { brightness: 5, contrast: -15, saturation: -40, hue: 0, lightness: 5, colorTemperature: 5, exposure: 5, highlights: 0, shadows: 5, vibrance: -25, clarity: -10, toneCurve: -5 }
            },
            {
                key: 'van-gogh-starry',
                name: '梵高星空',
                description: '适用场景：夜景、风景、艺术创作\n效果描述：增强蓝黄对比，饱和浓郁，仿佛梵高笔下的星空世界',
                params: { brightness: -5, contrast: 25, saturation: 30, hue: -10, lightness: -5, colorTemperature: -15, exposure: -5, highlights: 5, shadows: -10, vibrance: 25, clarity: 20, toneCurve: 20 }
            },
            {
                key: 'teal-orange',
                name: '红蓝电影',
                description: '适用场景：人像、电影、广告\n效果描述：好莱坞经典调色方案，青橙对比突出主体，电影感十足',
                params: { brightness: 0, contrast: 15, saturation: 15, hue: -15, lightness: 0, colorTemperature: -10, exposure: 0, highlights: 5, shadows: -10, vibrance: 10, clarity: 5, toneCurve: 10 }
            }
        ]
    },
    {
        key: 'light-effect',
        name: '光影效果',
        filters: [
            {
                key: 'lens-flare',
                name: '镜头光晕',
                description: '适用场景：风景、人像、户外\n效果描述：模拟阳光直射镜头产生的光晕，增添自然真实的光线感',
                params: { brightness: 10, contrast: 5, saturation: 5, hue: 5, lightness: 10, colorTemperature: 10, exposure: 15, highlights: 20, shadows: 5, vibrance: 5, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'volumetric-light',
                name: '体积光束',
                description: '适用场景：森林、教堂、室内\n效果描述：模拟丁达尔效应的体积光，光线穿过缝隙形成可见光束',
                params: { brightness: 10, contrast: 10, saturation: 5, hue: 5, lightness: 10, colorTemperature: 10, exposure: 15, highlights: 25, shadows: 10, vibrance: 5, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'neon-city',
                name: '霓虹都市',
                description: '适用场景：夜景、城市、人像\n效果描述：赛博朋克风格的霓虹光效，粉蓝紫三色交织的城市夜景',
                params: { brightness: -10, contrast: 20, saturation: 25, hue: 15, lightness: -10, colorTemperature: -15, exposure: -10, highlights: 10, shadows: -15, vibrance: 20, clarity: 10, toneCurve: 15 }
            },
            {
                key: 'tyndall-forest',
                name: '丁达尔森林',
                description: '适用场景：森林、公园、清晨\n效果描述：模拟森林中阳光穿过树叶缝隙的丁达尔光柱效果',
                params: { brightness: 10, contrast: 10, saturation: 10, hue: 5, lightness: 10, colorTemperature: 10, exposure: 15, highlights: 20, shadows: 15, vibrance: 10, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'candlelight-warm',
                name: '烛光温暖',
                description: '适用场景：室内、人像、美食\n效果描述：模拟烛光的温暖色调，中心明亮四周暗沉，温馨私密',
                params: { brightness: 5, contrast: 10, saturation: 5, hue: 10, lightness: 5, colorTemperature: 25, exposure: 5, highlights: 10, shadows: -10, vibrance: 5, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'moonlight-silver',
                name: '月光银辉',
                description: '适用场景：夜景、人像、静物\n效果描述：冷调月光效果，银蓝色调营造宁静神秘的夜晚氛围',
                params: { brightness: -10, contrast: 10, saturation: -30, hue: -10, lightness: -15, colorTemperature: -25, exposure: -10, highlights: 5, shadows: -15, vibrance: -20, clarity: 5, toneCurve: 5 }
            },
            {
                key: 'backlight-silhouette',
                name: '逆光剪影',
                description: '适用场景：人像、风景、日落\n效果描述：强烈的逆光效果，主体形成剪影，背景光晕灿烂',
                params: { brightness: -15, contrast: 40, saturation: 10, hue: 10, lightness: -20, colorTemperature: 15, exposure: 10, highlights: 30, shadows: -30, vibrance: 10, clarity: 5, toneCurve: 20 }
            }
        ]
    },
    {
        key: 'texture',
        name: '纹理叠加',
        filters: [
            {
                key: 'film-grain',
                name: '胶片颗粒',
                description: '适用场景：人像、街拍、电影感画面\n效果描述：细腻的单色胶片颗粒，模拟真实胶片的质感和温度',
                params: { brightness: 0, contrast: 5, saturation: -5, hue: 0, lightness: 0, colorTemperature: 5, exposure: 0, highlights: -5, shadows: 5, vibrance: -5, clarity: 0, toneCurve: 5 }
            },
            {
                key: 'vintage-scratches',
                name: '岁月划痕',
                description: '适用场景：复古风、艺术创作、老照片\n效果描述：模拟老照片表面的细小划痕和磨损痕迹',
                params: { brightness: -5, contrast: 10, saturation: -15, hue: 5, lightness: -5, colorTemperature: 10, exposure: -5, highlights: -5, shadows: 5, vibrance: -10, clarity: 0, toneCurve: 5 }
            },
            {
                key: 'paper-texture',
                name: '纸张纹理',
                description: '适用场景：人像、静物、复古风\n效果描述：在画面上叠加真实纸张纹理，增添手工质感和温度',
                params: { brightness: 5, contrast: 5, saturation: -10, hue: 5, lightness: 5, colorTemperature: 5, exposure: 5, highlights: 0, shadows: 5, vibrance: -10, clarity: -5, toneCurve: 0 }
            },
            {
                key: 'glitch-art',
                name: '故障艺术',
                description: '适用场景：创意设计、封面、海报\n效果描述：数字故障风格，RGB通道偏移和扫描线营造电子迷幻感',
                params: { brightness: 0, contrast: 20, saturation: 20, hue: 30, lightness: 0, colorTemperature: -10, exposure: 0, highlights: 5, shadows: -10, vibrance: 15, clarity: 10, toneCurve: 15 }
            },
            {
                key: 'light-leak',
                name: '漏光效果',
                description: '适用场景：人像、旅行、日常\n效果描述：模拟胶片相机漏光，橙红色光晕从边缘渗入画面',
                params: { brightness: 10, contrast: 5, saturation: 10, hue: 10, lightness: 10, colorTemperature: 15, exposure: 15, highlights: 20, shadows: 5, vibrance: 10, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'ink-wash',
                name: '水墨晕染',
                description: '适用场景：风景、艺术创作、中国风\n效果描述：水墨画般的晕染效果，浓淡相宜，留白意境深远',
                params: { brightness: 10, contrast: 15, saturation: -50, hue: 0, lightness: 10, colorTemperature: -5, exposure: 10, highlights: 10, shadows: 10, vibrance: -30, clarity: -15, toneCurve: -10 }
            },
            {
                key: 'digital-noise',
                name: '像素噪点',
                description: '适用场景：夜景、高ISO场景、艺术创作\n效果描述：高ISO数码相机的彩色噪点效果，带有随机色偏',
                params: { brightness: -5, contrast: 10, saturation: 5, hue: 0, lightness: -5, colorTemperature: 0, exposure: -5, highlights: -5, shadows: -10, vibrance: 5, clarity: 5, toneCurve: 10 }
            }
        ]
    },
    {
        key: 'geometric',
        name: '几何变形',
        filters: [
            {
                key: 'fisheye-world',
                name: '鱼眼世界',
                description: '适用场景：风景、建筑、创意人像\n效果描述：鱼眼镜头的桶形畸变效果，视野极度扩展，边缘夸张变形',
                params: { brightness: 0, contrast: 15, saturation: 10, hue: 0, lightness: 0, colorTemperature: 0, exposure: 0, highlights: -5, shadows: -5, vibrance: 10, clarity: 15, toneCurve: 10 }
            },
            {
                key: 'swirl-twist',
                name: '漩涡扭曲',
                description: '适用场景：艺术创作、创意设计、抽象\n效果描述：以画面中心为轴产生漩涡状扭曲，仿佛时空漩涡',
                params: { brightness: 0, contrast: 10, saturation: 15, hue: 20, lightness: 0, colorTemperature: 0, exposure: 0, highlights: 5, shadows: -5, vibrance: 10, clarity: 5, toneCurve: 10 }
            },
            {
                key: 'pixel-kingdom',
                name: '像素王国',
                description: '适用场景：游戏风、创意设计、社交媒体\n效果描述：将画面像素化为复古游戏风格，色彩简化为有限色板',
                params: { brightness: 5, contrast: 20, saturation: 20, hue: 0, lightness: 5, colorTemperature: 0, exposure: 5, highlights: 0, shadows: -5, vibrance: 15, clarity: 20, toneCurve: 10 }
            },
            {
                key: 'kaleidoscope',
                name: '万花筒',
                description: '适用场景：艺术创作、封面设计、抽象\n效果描述：万花筒般的对称重复图案，将普通画面转化为迷幻对称艺术',
                params: { brightness: 5, contrast: 15, saturation: 20, hue: 15, lightness: 5, colorTemperature: 5, exposure: 5, highlights: 5, shadows: -5, vibrance: 15, clarity: 10, toneCurve: 10 }
            },
            {
                key: 'wave-ripple',
                name: '波浪涟漪',
                description: '适用场景：水面倒影、创意设计、艺术\n效果描述：水面波纹般的扭曲效果，画面仿佛倒映在涟漪水面上',
                params: { brightness: 0, contrast: 10, saturation: 5, hue: -5, lightness: 0, colorTemperature: -5, exposure: 0, highlights: 5, shadows: 0, vibrance: 5, clarity: -5, toneCurve: 5 }
            },
            {
                key: 'prism-refraction',
                name: '棱镜折射',
                description: '适用场景：人像、创意设计、专辑封面\n效果描述：模拟光线通过棱镜的折射和色散，产生彩虹般的分裂效果',
                params: { brightness: 5, contrast: 10, saturation: 25, hue: 25, lightness: 5, colorTemperature: 0, exposure: 5, highlights: 10, shadows: -5, vibrance: 20, clarity: 5, toneCurve: 10 }
            },
            {
                key: 'shattered-glass',
                name: '碎裂镜面',
                description: '适用场景：创意设计、海报、封面\n效果描述：画面仿佛被打碎的镜面，每个碎片有不同的反射偏移',
                params: { brightness: -5, contrast: 20, saturation: 10, hue: 0, lightness: -5, colorTemperature: 0, exposure: -5, highlights: 5, shadows: -10, vibrance: 10, clarity: 15, toneCurve: 15 }
            }
        ]
    },
    {
        key: 'art-style',
        name: '艺术风格',
        filters: [
            {
                key: 'oil-painting',
                name: '油画笔触',
                description: '适用场景：风景、人像、艺术创作\n效果描述：厚重的油画笔触质感，色彩浓郁饱满，边缘柔和过渡',
                params: { brightness: 5, contrast: 15, saturation: 15, hue: 5, lightness: 5, colorTemperature: 5, exposure: 5, highlights: 5, shadows: -5, vibrance: 15, clarity: -10, toneCurve: 10 }
            },
            {
                key: 'watercolor',
                name: '水彩晕染',
                description: '适用场景：风景、花卉、插画\n效果描述：轻盈透明的水彩画效果，色彩自然晕染，留白清新雅致',
                params: { brightness: 10, contrast: -10, saturation: -10, hue: 5, lightness: 10, colorTemperature: 5, exposure: 10, highlights: 10, shadows: 10, vibrance: -5, clarity: -20, toneCurve: -5 }
            },
            {
                key: 'charcoal-sketch',
                name: '炭笔素描',
                description: '适用场景：人像、建筑、艺术创作\n效果描述：粗犷的炭笔素描风格，明暗对比强烈，笔触粗犷有力',
                params: { brightness: -10, contrast: 30, saturation: -80, hue: 0, lightness: -10, colorTemperature: 0, exposure: -10, highlights: -10, shadows: -20, vibrance: -50, clarity: 20, toneCurve: 25 }
            },
            {
                key: 'pop-art',
                name: '波普艺术',
                description: '适用场景：人像、海报、广告\n效果描述：安迪·沃霍尔式的波普艺术风格，高饱和色彩和网点半调效果',
                params: { brightness: 10, contrast: 40, saturation: 30, hue: 0, lightness: 10, colorTemperature: 0, exposure: 10, highlights: 5, shadows: -10, vibrance: 25, clarity: 15, toneCurve: 20 }
            },
            {
                key: 'relief-carving',
                name: '浮雕刻画',
                description: '适用场景：建筑、人像、艺术创作\n效果描述：石雕般的浮雕效果，画面呈现立体的凹凸质感',
                params: { brightness: -5, contrast: 20, saturation: -40, hue: 0, lightness: -5, colorTemperature: 5, exposure: -5, highlights: 5, shadows: -15, vibrance: -25, clarity: 25, toneCurve: 15 }
            },
            {
                key: 'pencil-drawing',
                name: '铅笔画',
                description: '适用场景：人像、建筑、日常\n效果描述：细腻的铅笔画风格，线条清晰流畅，纸张纹理自然',
                params: { brightness: 5, contrast: 15, saturation: -70, hue: 0, lightness: 5, colorTemperature: 0, exposure: 5, highlights: 0, shadows: -10, vibrance: -40, clarity: 15, toneCurve: 10 }
            },
            {
                key: 'mosaic-art',
                name: '马赛克艺术',
                description: '适用场景：建筑、装饰、艺术创作\n效果描述：彩色马赛克拼贴效果，每个色块独立鲜明，拼合成完整画面',
                params: { brightness: 5, contrast: 15, saturation: 15, hue: 0, lightness: 5, colorTemperature: 0, exposure: 5, highlights: 0, shadows: -5, vibrance: 10, clarity: 20, toneCurve: 10 }
            }
        ]
    },
    {
        key: 'mood',
        name: '氛围渲染',
        filters: [
            {
                key: 'dreamy-soft',
                name: '梦境柔光',
                description: '适用场景：人像、婚礼、浪漫场景\n效果描述：柔和梦幻的光效，画面笼罩在一层轻柔的光晕中',
                params: { brightness: 10, contrast: -10, saturation: -10, hue: 5, lightness: 10, colorTemperature: 5, exposure: 10, highlights: 15, shadows: 10, vibrance: -5, clarity: -20, toneCurve: -5 }
            },
            {
                key: 'cyberpunk',
                name: '赛博朋克',
                description: '适用场景：夜景、城市、科幻\n效果描述：霓虹灯下的赛博朋克世界，粉蓝紫三色高饱和度渲染',
                params: { brightness: -10, contrast: 25, saturation: 20, hue: 15, lightness: -10, colorTemperature: -15, exposure: -10, highlights: 10, shadows: -20, vibrance: 20, clarity: 15, toneCurve: 20 }
            },
            {
                key: 'vaporwave',
                name: '蒸汽波梦',
                description: '适用场景：创意设计、封面、社交媒体\n效果描述：90年代蒸汽波美学，粉紫色调带有复古未来主义的迷幻感',
                params: { brightness: 5, contrast: 10, saturation: 15, hue: 20, lightness: 5, colorTemperature: -10, exposure: 5, highlights: 10, shadows: -5, vibrance: 15, clarity: 0, toneCurve: 10 }
            },
            {
                key: 'gothic-dark',
                name: '哥特暗黑',
                description: '适用场景：人像、建筑、暗黑风\n效果描述：阴郁的哥特风格，低明度高对比，暗角浓重，冷调肃穆',
                params: { brightness: -20, contrast: 25, saturation: -20, hue: -5, lightness: -15, colorTemperature: -15, exposure: -15, highlights: -10, shadows: -25, vibrance: -15, clarity: 10, toneCurve: 15 }
            },
            {
                key: 'healing-sunshine',
                name: '治愈暖阳',
                description: '适用场景：人像、日常、美食\n效果描述：温暖治愈的阳光色调，柔和舒适，仿佛午后的慵懒时光',
                params: { brightness: 15, contrast: -5, saturation: 5, hue: 10, lightness: 10, colorTemperature: 20, exposure: 10, highlights: 10, shadows: 10, vibrance: 5, clarity: -10, toneCurve: 5 }
            },
            {
                key: 'glacier-aurora',
                name: '冰川极光',
                description: '适用场景：风景、夜景、极地\n效果描述：极光般的冷调色彩，蓝绿色交织，神秘而壮丽',
                params: { brightness: -5, contrast: 15, saturation: 10, hue: -15, lightness: -5, colorTemperature: -20, exposure: -5, highlights: 5, shadows: -10, vibrance: 10, clarity: 10, toneCurve: 10 }
            },
            {
                key: 'golden-hour',
                name: '黄金时刻',
                description: '适用场景：人像、风景、日落\n效果描述：日落黄金时刻的温暖光线，金色光辉笼罩一切，柔和而浪漫',
                params: { brightness: 10, contrast: 10, saturation: 10, hue: 15, lightness: 10, colorTemperature: 25, exposure: 10, highlights: 15, shadows: 5, vibrance: 10, clarity: -5, toneCurve: 5 }
            }
        ]
    }
];
