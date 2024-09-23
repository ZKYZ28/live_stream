export const userKeys = {
    all: ['user'] as const,
    list: () => [...userKeys.all, 'list-user'] as const,
    get: (id: string) => [...userKeys.all, id] as const,
};

export const videoKeys = {
    all: ['video'] as const,
    get: (id: string) => [...videoKeys.all, id] as const,
    list: () => [...videoKeys.all, 'list-video'] as const,
};

export const channelKeys = {
    all: ['channel'] as const,
    get: (id: string) => [...channelKeys.all, id] as const,
    list: () => [...channelKeys.all, 'list-channel'] as const,
};

export const checkoutOrderKeys = {
    all: ['video'] as const,
    get: (id: string) => [...videoKeys.all, id] as const,
    list: () => [...videoKeys.all, 'list-video'] as const,
};